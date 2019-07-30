class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render :show
        else
            render json: ['Invalid username and/or password.'], status: 401
        end
    end

    def destroy
        if logged_in?
            @user = current_user
            logout!
            render :destroy
        else
            render json: ["There is no user to log out."], status: 404
        end
    end

end