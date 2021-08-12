class RegistrationsController < Devise::RegistrationsController
  def create
    build_resource(sign_up_params)

    resource.save

    if resource.persisted?
      sign_up(resource_name, resource)
      render_jsonapi_response(resource)
    else
      render json: {
        'errors': [
          'status': '401',
          'title': 'Email already taken'
        ]
      }, status: 401
    end
  end
end
