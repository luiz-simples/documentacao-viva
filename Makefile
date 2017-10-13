.PHONY: in clean

in: clean selenium
	docker-compose run --rm application /bin/bash

selenium:
	docker-compose up -d selenium

clean:
	docker-compose down
	docker volume ls -qf dangling=true | xargs -r docker volume rm
