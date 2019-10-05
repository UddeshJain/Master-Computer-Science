class Stack(object):
    '''
    class to represent a stack
    Implemented with an array
    '''
    def __init__(self):
        '''
        Constructor
        '''
        self.datas = []
    
    def __str__(self):
        return " ".join(str(e) for e in reversed(self.datas))
    
    def size(self):
        '''
        return the size of the stack
        '''
        return len(self.datas)
    
    def top(self):
        '''
        Return the top of the stack
        '''
        return self.datas[-1]

    def push(self, value):
        '''
        add a value on the stack
        '''
        return self.datas.append(value)
    
    def pop(self):
        '''
        pop the last element of the stack
        '''
        value = self.top()
        del self.datas[-1]

        return value
    
    def empty(self):
        self.datas = []

def print_stack(stack):
    print(f'stack : {stack}')

if __name__ == "__main__":
    stack = Stack()

    print('Pushing 1')
    stack.push(1)
    print_stack(stack)
    print('Pushing 5')
    stack.push(5)
    print_stack(stack)
    print(f'top : {stack.top()}')
    print('popping')
    print(f'value poped : {stack.pop()}')
    print_stack(stack)