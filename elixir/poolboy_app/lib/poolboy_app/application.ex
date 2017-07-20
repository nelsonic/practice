defmodule PoolboyApp.Application do
  @timeout 60000
  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  # def start(_type, _args) do
  #   import Supervisor.Spec, warn: false
  #
  #   # Define workers and child supervisors to be supervised
  #   children = [
  #     # Starts a worker by calling: PoolboyApp.Worker.start_link(arg1, arg2, arg3)
  #     # worker(PoolboyApp.Worker, [arg1, arg2, arg3]),
  #   ]
  #
  #   # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
  #   # for other strategies and supported options
  #   opts = [strategy: :one_for_one, name: PoolboyApp.Supervisor]
  #   Supervisor.start_link(children, opts)
  # end
  def start do
    tasks = Enum.map(1..20, fn(i) ->
      Task.async(fn -> :poolboy.transaction(:worker,
        &(GenServer.call(&1, {:square_root, i})), @timeout)
      end)
    end)
    Enum.each(tasks, fn(task) -> IO.puts(Task.await(task, @timeout)) end)
  end
end
