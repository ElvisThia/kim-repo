use strict;
use warnings;
use IO::Socket::INET;

$SIG{PIPE} = "IGNORE";

my $root = "/workspaces/Kim-Store";
my $port = $ENV{KIM_STORE_PORT} || 8000;
my $server = IO::Socket::INET->new(
  LocalAddr => "0.0.0.0",
  LocalPort => $port,
  Proto => "tcp",
  Listen => 20,
  Reuse => 1,
) or die $!;

print "Serving Julie-Store at http://0.0.0.0:$port\n";

while (my $client = $server->accept()) {
  my $request = <$client> // "";
  while (<$client>) {
    last if /^\r?\n$/;
  }

  my ($method, $path) = $request =~ m{^(GET|HEAD)\s+([^\s]+)};
  if (!$method) {
    print $client "HTTP/1.1 405 Method Not Allowed\r\nContent-Length: 0\r\n\r\n";
    close $client;
    next;
  }

  $path = "/index.html" if !defined($path) || $path eq "/";
  $path =~ s/\?.*$//;
  $path =~ s/%20/ /g;

  if ($path =~ /\.\./ || $path !~ m{^/[A-Za-z0-9._/-]+$} || $path =~ m{^/\.}) {
    print $client "HTTP/1.1 403 Forbidden\r\nContent-Length: 0\r\n\r\n";
    close $client;
    next;
  }

  my $file = $root . $path;
  my $fh;
  if (!open($fh, "<:raw", $file)) {
    my $body = "Not Found";
    print $client "HTTP/1.1 404 Not Found\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Length: " . length($body) . "\r\n\r\n";
    print $client $body if $method eq "GET";
    close $client;
    next;
  }

  local $/;
  my $body = <$fh>;
  close $fh;

  my ($ext) = $file =~ /\.([^.]+)$/;
  my %type = (
    html => "text/html; charset=utf-8",
    css => "text/css; charset=utf-8",
    js => "text/javascript; charset=utf-8",
    webmanifest => "application/manifest+json",
    json => "application/json; charset=utf-8",
    jpg => "image/jpeg",
    jpeg => "image/jpeg",
    png => "image/png",
    webp => "image/webp",
    svg => "image/svg+xml",
  );
  my $mime = $type{lc($ext || "")} || "text/plain; charset=utf-8";

  print $client "HTTP/1.1 200 OK\r\nContent-Type: $mime\r\nContent-Length: " . length($body) . "\r\nCache-Control: no-store\r\n\r\n";
  print $client $body if $method eq "GET";
  close $client;
}
