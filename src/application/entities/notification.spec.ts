import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', async () => {
    const content = new Notification({
      content: new Content('Você recebeu uma notificação'),
      category: 'social',
      recipientId: '7e1fd4f0-65e8-45bf-98f4-757c16c943e7',
    });

    expect(content).toBeTruthy();
  });
});
