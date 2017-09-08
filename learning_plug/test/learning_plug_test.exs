defmodule LearningPlugTest do
  use ExUnit.Case
  doctest LearningPlug

  test "greets the world" do
    assert LearningPlug.hello() == :world
  end
end
