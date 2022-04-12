from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import FileResponse

def index_page(request):
      return FileResponse('index.html')


if __name__ == '__main__':
    with Configurator() as config:
        
        config.add_route('home', '/')
          
        config.add_view(index_page,route_name ='home')
        

        config.add_static_view(name='/', path='./public', cache_max_age=3600)
        
        app = config.make_wsgi_app()
        
    print("server started on port 6543")
    server = make_server('0.0.0.0', 6543, app)
    server.serve_forever()