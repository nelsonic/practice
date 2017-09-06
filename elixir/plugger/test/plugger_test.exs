defmodule PluggerTest do
  use ExUnit.Case
  doctest Plugger

  test "greets the world" do
    assert Plugger.hello() == :world
  end
end
