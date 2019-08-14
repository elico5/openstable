class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :create
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.includes(:reviews,
        { favorites: [{stable: [:reviews, { picture_attachment: [:blob]}] }] },
        { reservations: [:review, {stable: [:reviews, { picture_attachment: [:blob]}] }] }).find(params[:id])  
        render :show
    end

    def update
        @user = User.find(params[:id])
        if @user.email == 'demouser@openstable.com'
            render json: ['You cannot alter the Demo User account information!'], status: 422
            return
        end
        if params[:password]
            if @user.update(password: params[:password][:password])
                render json: ['Password changed successfully']
            else
                render json: @user.errors.full_messages, status: 422
            end
        elsif @user.update(
            email: user_params[:email],
            first_name: user_params[:first_name],
            last_name: user_params[:last_name],
            phone_number: user_params[:phone_number],
            riding_location: user_params[:riding_location])
            render :update
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(
            :email,
            :password,
            :first_name,
            :last_name,
            :phone_number,
            :riding_location
        )
    end

end