defmodule PoolboyApp do
  use Application

  defp poolboy_config do
    [{:name, {:local, :worker}},
      {:worker_module, Worker},
      {:size, 5},
      {:max_overflow, 2}]
  end

  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      :poolboy.child_spec(:worker, poolboy_config, [])
    ]

    opts = [strategy: :one_for_one, name: PoolboyApp.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
