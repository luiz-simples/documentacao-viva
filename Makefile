.PHONY: in clean

in: clean
	docker-compose run --rm application /bin/bash

clean:
	docker-compose down
	docker volume ls -qf dangling=true | xargs -r docker volume rm
