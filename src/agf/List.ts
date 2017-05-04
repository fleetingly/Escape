/*
 *  List.ts
 *  egret
 *  Anansi Game Framework
 *
 *  Created by Chen Zhen on 16/09/30.
 *  Copyright (c) 2016年 Anansi Mobile. All rights reserved.
 */

module agf {
	/**
	 * 一个简单的链表类
	 */
	export class List<T> {

		private mHead:ListNode<T> = null;
		private mTail:ListNode<T> = null;
		private mSize:number = 0;

		public constructor() {

		}

		/**
		 * 添加数据到链表末尾
		 */
		public add(d:T): void {
			let n = new ListNode<T>();
			n.data = d;

			if (this.mTail == null) { // 还没有数据
				this.mHead = n;
				this.mTail = n;
			} else {
				this.mTail.next = n;
				n.prev = this.mTail;
				this.mTail = n;
			}
			this.mSize++;
		}

		/**
		 * 添加数据到链表末尾，同add()
		 */
		public push(d:T): void {
			this.add(d);
		}

		/**
		 * 插入数据，如果位置at超出链表长度，则直接添加到链表末尾，如果at < 0，则添加到链表头部
		 */
		public insert(d:T, at:number): void {
			let n = new ListNode<T>();
			n.data = d;

			if (this.mTail == null) { // 还没有数据
				this.mHead = n;
				this.mTail = n;
			} else {
				if (at < 0) {
					this.mHead.prev = n;
					n.next = this.mHead;
					this.mHead = n;
				} else {
					let prev = this.getNodeAt(at);
					if (prev == null || prev == this.mTail) {
						prev = this.mTail;
						this.mTail = n;
					}
					prev.next = n;
					n.prev = prev;
					n.next = prev.next;
					if (n.next) n.next.prev = n;
				}
			}
			this.mSize++;
		} 

		/**
		 * 从链表末尾移除数据
		 */
		public pop(): T {
			if (this.mSize <= 0) return null;

			let d = this.mTail.data;

			if (this.mSize == 1) {
				this.mHead = null;
				this.mTail = null;
			} else {
				this.mTail = this.mTail.prev;
				this.mTail.next = null;
			}
			this.mSize--;

			return d;
		}

		/**
		 * 移除指定数据
		 */
		public remove(d:T): void {
			let n = this.getNodeByData(d);
			this.removeNode(n);
		}

		/**
		 * 移除指定位置的数据
		 */
		public removeAt(at:number): void {
			let n = this.getNodeAt(at);
			this.removeNode(n);
		}

		/**
		 * 获取数据所在位置，找不到则返回-1
		 */
		public indexOf(d:T): number {
			if (this.mSize == 0) return -1;
			if (this.mHead.data == d) return 0;
			if (this.mTail.data == d) return this.mSize - 1;

			let n = this.mHead.next;
			let i = 1;
			while (n != null) {
				if (n.data == d) break;
				n = n.next;
			}
			return i;
		}

		/**
		 * 清除所有数据
		 */
		public clear(): void {
			this.mHead = this.mTail = null;
			this.mSize = 0;
		}

		protected getNodeByData(d:T): ListNode<T> {
			if (this.mSize == 0) return null;
			if (this.mHead.data == d) return this.mHead;
			if (this.mTail.data == d) return this.mTail;

			let n = this.mHead.next;
			while (n != null) {
				if (n.data == d) break;
				n = n.next;
			}
			return n;
		}

		protected removeNode(n:ListNode<T>): void {
			if (n != null) {
				let prev = n.prev;
				let next = n.next;

				if (prev != null) prev.next = next;
				if (next != null) next.prev = prev;

				if (n == this.mHead) this.mHead = next;
				if (n == this.mTail) this.mTail = prev;

				this.mSize--;
			}
		}

		/**
		 * 获取位置p上的数据
		 */
		public get(p:number): T {
			let n = this.getNodeAt(p);
			if (n == null) return null;
			else return n.data;
		}

		/**
		 * 获取指定位置的节点
		 */
		protected getNodeAt(p:number): ListNode<T> {
			if (p < 0 || p >= this.mSize) return null;
			if (this.mHead == null) return null;

			if (p == 0) return this.mHead;
			if (p == this.mSize - 1) return this.mTail;

			let n = this.mHead;
			let i = 0;
			while (i != p) {
				n = n.next;
				i++;
			}

			return n;
		}

		public get length(): number { return this.mSize; }
		public set length(l:number) {} // do nothing
	}

	/**
	 * 链表节点
	 */
	class ListNode<T> {

		public data:T = null;
		public prev:ListNode<T> = null;
		public next:ListNode<T> = null;

		constructor() {

		}
	}
}