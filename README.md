# advance-node-js
Libuv have total 7 thread (including main thread)
2 of them are reserver for garbage collection and 4 of them are use when needed (ie. DB queries, file read/write, network operation) (seem to asynchoronus), not a high CPU works