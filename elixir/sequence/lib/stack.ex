defmodule Totes.McStack do
  use GenServer                      

  def handle_call(:pop, _from, stack) when stack == [] do        
    { :reply, :empty, [] }
  end
  
  def handle_call(:pop, _from, stack) do
    [ head|tail ] = stack
    { :reply, head, tail }
  end
end
