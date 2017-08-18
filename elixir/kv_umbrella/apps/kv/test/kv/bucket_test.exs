defmodule KV.BucketTest do
  use ExUnit.Case, async: true

  setup do
    {:ok, bucket} = start_supervised(KV.Bucket)
    %{bucket: bucket}
  end

  test "are temporary workers" do
    assert Supervisor.child_spec(KV.Bucket, []).restart == :temporary
  end

  test "stores values by key", %{bucket: bucket} do
    assert KV.Bucket.get(bucket, "milk") == nil

    KV.Bucket.put(bucket, "milk", 3)
    assert KV.Bucket.get(bucket, "milk") == 3
  end

  test "delete a key from bucket", %{bucket: bucket} do
    # confirm the key does not exist before we create it:
    assert KV.Bucket.get(bucket, "kale") == nil

    KV.Bucket.put(bucket, "kale", 4)
    assert KV.Bucket.get(bucket, "kale") == 4

    # delete the key:
    assert KV.Bucket.delete(bucket, "kale") === 4
    # confirm the key no longer exists
    assert KV.Bucket.get(bucket, "kale") == nil
  end
end
