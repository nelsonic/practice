defmodule RumblWeb.UserView do
  use RumblWeb, :view
 
  alias Rumbl.Accounts

  def first_name(%Accounts.User{name: name}) do
    name
    |> String.split(" ")
    |> Enum.at(0)
  end
end
