defmodule Rumbl.Multimedia.Video do
  use Ecto.Schema
  import Ecto.Changeset


  schema "videos" do
    field :description, :string
    field :title, :string
    field :url, :string
    field :user_id, :id

    timestamps()
  end

  @doc false
  def changeset(video, attrs) do
    video
    |> cast(attrs, [:url, :title, :description])
    |> validate_required([:url, :title, :description])
  end
end
