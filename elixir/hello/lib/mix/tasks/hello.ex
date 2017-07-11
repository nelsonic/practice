defmodule Mix.Tasks.Hello do
  use Mix.Task

  @shortdoc "Simply runs the Hello.say/0 command."
  def run(_) do
    Hello.say # calling our Hello.say() function from earlier
  end
end
