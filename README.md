# pubsub-Server
HTTP Simple PubSub Server using Redis  and Redis-SSE for client real time update.

Testing it all out Publishing an event
$ ./start-server.sh
$ curl -X POST -d '{ "url": "http://localhost:8000/event"}' http://localhost:8000/subscribe/topic1
$ curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/topic1
                
The above code would set up a subscription between topic1 and http://localhost:8000/event. When the event is published in line 3, it would send both the topic and body as JSON to http://localhost:8000

The /event endpoint is just used to print the data and verify everything is working.
