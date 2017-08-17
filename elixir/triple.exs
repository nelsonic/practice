defmodule Triple do
  def pythagorean(n) when n > 0 do
    for a <- 1..n-2,
        b <- a+1..n-1,
        c <- b+1..n,
        a + b + c <= n,
        a*a + b*b == c*c,
        do: {a, b, c}
  end
end
