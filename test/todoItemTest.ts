
import { TodoItem } from '../src/todoItem';
import { expect } from 'chai';

describe('TodoItem tests', () => {
    it('TodoItem can be created', () => {
        const item = new TodoItem(1, 'Find testing frameworks!');
        expect(item.complete).to.be.false;
        expect(item.task).to.be.equal('Find testing frameworks!');
    });

});
