defmodule Sequence do
  use Application

  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      worker(Sequence.Server, [123])
    ]

    opts = [strategy: :one_for_one, name: Sequence.Supervisor]
    {:ok, _pid} = Supervisor.start_link(children, opts)
  end
end
