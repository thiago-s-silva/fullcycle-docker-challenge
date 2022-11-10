# Golang builder
FROM golang:latest as goBuilder

WORKDIR /go/src

COPY /src .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -tags netgo -ldflags '-w -extldflags "-static"' -o main main.go

# Base Image
FROM scratch

COPY --from=goBuilder /go/src/main .

CMD [ "/main" ]