# For now all origins are allowed for cross-origin requests
## TODO: Whitelist corresponding URLs of the React Routes, once they are set

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'
      resource '*', 
          headers: :any, 
          methods: [:get, :post, :patch, :put, :options]
    end
  end
