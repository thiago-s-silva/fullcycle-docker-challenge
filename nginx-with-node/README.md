# Nginx with Node challenge

## Requirements
- [x] Setup Nginx reverse proxy server.
- [x] When requesting Nginx expose endpoint should redirect to Node private endpoint.
- [x] When requesting Node endpoint should insert a new record on people table and return all records using HTML format.
- [x] All containers and resources should be available by just running the docker-compose command.


## Usage
From the **nginx-with-node** folder run below command:
```js
docker-compose up -d
or
// to see outputs from the containers
docker-compose up
```

**!! The server take some seconds to be ready for requests**