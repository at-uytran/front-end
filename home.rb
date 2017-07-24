require "sinatra"

get '/' do
	# "hello sinatra"
	send_file File.join( 'public', 'template/index.html')
end