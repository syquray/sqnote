---
title: 'f-string の !r とは何なのか'
excerpt: 'Python コードで時々見る f-string 中の !r について解説します'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2023-06-18'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
tags:
  - 'Python'
  - 'f-string'
---

## 結論

デフォルトでは、f-string は `{}` 中の値に対して `str` を呼び出した結果を表示します。

`!r` を指定すると、`str` のかわりに `repr` を呼び出した結果が返ります。

## どういうこと?

なんのことか分からない人もいると思うので説明します。

```python
class TestClass:
    def __str__ (self):
        return "str が呼ばれたよ"
    
    def __repr__(self):
        return "repr が呼ばれたよ"


test_instance = TestClass()
```

上のコードでは、`TestClass` のインスタンスに対して `str` が呼ばれたときの処理と `repr` が呼ばれたときの処理を定義しています。

では、下のコードを実行してみましょう。

```python
print(f"{test_instance}")
```

`str が呼ばれたよ` と print されたと思います。

次に、`!r` を指定して実行してみましょう。

```python
print(f"{test_instance!r}")
```

`repr が呼ばれたよ` と print されたと思います。

こんな感じで、`!r` を指定するとその値に対して `repr` を呼び出した結果が返ります。

ちなみに、`!s` や `!a` というのもあり、それぞれ `str` と `ascii` を呼び出した結果が返ります。
つまり、

```python
print(f"{test_instance}")
```

と

```python
print(f"{test_instance!s}")
```

は同じ結果になります。