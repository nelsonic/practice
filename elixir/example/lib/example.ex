defmodule Example do
  @moduledoc """
  Documentation for Example.
  """

  @doc """
  Hello world.

  ## Examples

      iex> Example.hello
      :world

  """
  def hello do
    :world
  end


  defstruct first: nil, last: nil

  @type t(first, last) :: %Example{first: first, last: last}

  @typedoc """
    Type that represents Examples struct with :first
    as integer and :last as integer.
  """
  @type t :: %Example{first: integer, last: integer}

  @spec sum_times(integer, %Example{first: integer, last: integer}) :: integer
  def sum_times(a, params) do
    for i <- params.first..params.last do
      i
    end
      |> Enum.map(fn el -> el * a end)
      |> Enum.sum
      |> round
  end
end
