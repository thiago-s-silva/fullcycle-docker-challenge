# Go Challange

[Docker Hub Image](https://hub.docker.com/repository/docker/poollary/codeeducation)

## Requirements
- [x] Publish image on <user>/codeeducation.
- [x] Needs to print 'Code.education Rocks!' when running the container.
- [x] The image size should be not greater than 2MB.


## Resolution
1) Build the multi-stage dockerfile to generate/copy the static go binary file to the base docker image.
```
docker build -t poollary/codeeducation .
```

4) Run container from created base image
```
docker run --rm -it poollary/codeeducation
```