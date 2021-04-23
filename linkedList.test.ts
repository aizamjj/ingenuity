import { LinkedList } from './linkedList';

describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = new LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).toHaveProperty('head');
    expect(linkedList).toHaveProperty('tail');
  });

  it('should return true/false when isEmpty is called', function() {
    expect(linkedList.isEmpty()).toBe(true);
    

  });
  it('insertFirst', function() {
    linkedList.insertFirst('something');
    expect(linkedList.head.next.value).toBe('something');
    linkedList.insertFirst('another');
    expect(linkedList.head.next.value).toBe('another')
    expect(linkedList.head.next.next.value).toBe('something')
  })

  it('insertLast', function() {
  });

  it('removeFirst', function() {
    linkedList.insertLast(4);
    linkedList.insertLast(5);
    expect(linkedList.head.next.value).toBe(4);
    linkedList.removeFirst();
    expect(linkedList.head.next.value).toBe(5);
  });
  it('removeLast', function() {
    linkedList.insertLast(6);
    linkedList.insertLast(7);
    expect(linkedList.getFirst()).toBe(6);
    linkedList.removeLast();
    expect(linkedList.getFirst()).toBe(6);
    linkedList.insertLast(8);
    expect(linkedList.getFirst()).toBe(6);
    
  })
  it('remove', function() {
    linkedList.insertLast('a');
    linkedList.insertLast('b');
    linkedList.insertLast('c');
    expect(linkedList.remove('b')).toBe('b');
    
  })

  it('should contain a value that was added', function() {
    linkedList.insertLast(4);
    linkedList.insertLast(5);
    expect(linkedList.contains(4)).toBe(true);
    expect(linkedList.contains(5)).toBe(true);
    expect(linkedList.contains(6)).toBe(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.insertLast(4);
    linkedList.insertLast(5);
    linkedList.removeFirst();
    expect(linkedList.contains(4)).toBe(false);
  });

});
