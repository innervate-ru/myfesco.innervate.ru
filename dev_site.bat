@echo on

call grunt search-index

start http://localhost:1313

call hugo server
