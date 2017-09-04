defmodule Totes.McStack do
  use GenServer                      

  @doc """
   When you call the :pop action it returns the first element in the array

   Returns `:hello`.

   ## Examples

       iex -S mix
       iex> { :ok, pid } = GenServer.start_link(Totes.McStack, [:hello, :world, "Awesome!"])
       iex> GenServer.call(pid, :pop)
       :hello

   """
  def handle_call(:pop, _from, stack) when stack == [] do        
    { :reply, :empty, [] }
  end
  
  def handle_call(:pop, _from, stack) do
    [ head|tail ] = stack
    { :reply, head, tail }
  end
end
