defmodule ExampleApp.App do
  use Application

  def start(_type, _args) do
    import Supervisor.Spec

    children = [
      supervisor(ExampleApp.Repo, [])
    ]

    opts = [strategy: :one_for_one, name: ExampleApp.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # not clear where to put this code!!
  import Ecto.Query, only: [from: 2]

  alias ExampleApp.{Repo,User}

  query = from u in User,
      where: u.confirmed == true,
      select: u.username

  Repo.all(query)  

end
