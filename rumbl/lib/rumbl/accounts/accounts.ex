defmodule Rumbl.Accounts do
  @moduledoc """
  The Accounts context.
  """

  alias Rumbl.Accounts.User

  alias Rumbl.Repo

  def get_user(id) do 
    Repo.get(User, id)
  end

  def get_user!(id) do 
    Repo.get!(User, id)
  end

  def get_user_by(params) do 
    Repo.get_by(User, params)
  end

  def list_users do 
    Repo.all(User)
  end

  def change_user(%User{} = user) do
    User.changeset(user, %{})
  end

  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

end
