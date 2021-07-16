# To start dev environment with API serving on port 3001 and react app on 3001

task :start do
  exec 'foreman start -p 3000'
end