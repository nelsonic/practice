defmodule Plugger.Mixfile do
  use Mix.Project

  def project do
    [
      app: :plugger,
      version: "0.1.0",
      elixir: "~> 1.5",
      start_permanent: Mix.env == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [applications: [:logger, :cowboy, :plug],
     mod: {Plugger, []}]
  end

  defp deps do
    [
      {:cowboy, "~> 1.0"},
      {:plug, "~> 1.0"}
    ]
  end
end
