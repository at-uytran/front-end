require "sinatra"

get '/' do
	# "hello sinatra"
	send_file File.join( 'project', 'template/index.html')
end