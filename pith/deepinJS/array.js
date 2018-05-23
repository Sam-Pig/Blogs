// 数组篇
// 内容比较杂，主要有两大方面：

	// 1 数组的7个API的实现；
	// 2 underscore源码如何读（函数节流防抖、数组去重等）

	

	// concat 拼装若干数组为一个数组，并return结果，不改变原来的数组
	// fill 填充原来的数组
	// push 向数组尾部添加新元素，并return新的长度值
	// shift 删除并return数组里的第一个值
	// pop 删除并return数组里的最后一个值
	// find

/*--------------------------------------------------------------------------------------------------------------------------*/
// 1 数组的7个API的实现

	// 1.1 join -------------------------------------------------------------------------------------

	var array = ['a','b','c']
	array.join("&")//"a&b&c"
	array.join.call(array,'&')//上句就等价于这句。看起来只传了一个参数'&'，其实传了两个参数。
	// join函数通过this和arguments[0]可以得到array和'&'两个值。

