defmodule LearningPlug do
  # We use Plug.Builder to have access to the plug/2 macro.
  # This macro can receive a function or a module plug and an
  # optional parameter that will be passed unchanged to the 
  # given plug.
  use Plug.Builder

  plug Plug.Logger
  plug :extract_name
  plug :greet, %{my_option: "Hello"}

  def extract_name(%Plug.Conn{request_path: "/" <> name} = conn, opts) do
    assign(conn, :name, name)
  end

  def greet(conn, opts) do
    conn
    |> send_resp(200, "#{opts[:my_option]}, #{conn.assigns.name}")
  end
end