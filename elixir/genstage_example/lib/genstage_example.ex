defmodule GenstageExample do
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      worker(GenstageExample.Producer, [0]),
      worker(GenstageExample.ProducerConsumer, []),
      worker(GenstageExample.Consumer, [], id: 1),
      worker(GenstageExample.Consumer, [], id: 2),
    ]

    opts = [strategy: :one_for_one, name: GenstageExample.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
