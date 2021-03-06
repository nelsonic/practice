defmodule Totes.McStack do
  use GenServer
  
  #####
  # External API  

  # Totes.McStack.start_link ["hello", "world", :totes]
  def start_link(stack) do
    GenServer.start_link(__MODULE__, stack, name: __MODULE__)
  end

  # Totes.McStack.pop
  # "hello"
  def pop do
    GenServer.call __MODULE__, :pop
  end

  # Totes.McStack.push "gringo"
  # :ok
  def push(value) do
    GenServer.cast __MODULE__, {:push, value}
  end

  @doc """
   When you call the :pop action it returns the first element in the array

   Returns `:hello`.

   ## Examples

       iex -S mix
       iex> { :ok, pid } = GenServer.start_link(Totes.McStack, [:hello, :world, "Awesome!"])
       iex> GenServer.call(pid, :pop)
       :hello
       iex> GenServer.cast(pid, {:push, "hai"})
       :ok
       iex> :sys.get_status pid
   """
  def handle_call(:pop, _from, stack) when stack == [] do        
    { :reply, :empty, [] }
  end
  
  def handle_call(:pop, _from, stack) do
    [ head|tail ] = stack
    { :reply, head, tail }
  end
  
  def handle_cast({:push, value}, stack) do
    stack = [value | stack]
    { :noreply, stack }
  end
  
  def terminate(reason, status) do
    IO.puts "Had to terminate because of: #{reason}, status: #{inspect status}"
    :ok
  end
end
