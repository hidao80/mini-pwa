import http.server
import ssl

server_address = ('localhost', 8443)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)

ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ssl_context.load_cert_chain('server.pem')

httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)

print(f'Starting https server on {server_address[0]}:{server_address[1]}')
httpd.serve_forever()