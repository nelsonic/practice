defmodule Plugger.Router do
  use Plug.Router

  plug :match
  plug :dispatch

  def start_link do
    Plug.Adapters.Cowboy.http(Plugger.Router, [])
  end
  
  get "/" do
    conn
    |> send_resp(200, "Plug!")
  end
end
