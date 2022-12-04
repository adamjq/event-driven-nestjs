import { Test, TestingModule } from '@nestjs/testing';
import { createMock } from '@golevelup/ts-jest';
import { EmailService } from '../email.service';
import { SendGridService } from '../../sendgrid/sendgrid.service';

describe('EmailService', () => {
  let emailService: EmailService;
  let sendGridService: SendGridService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        { provide: SendGridService, useValue: createMock<SendGridService>() },
      ],
    }).compile();

    emailService = module.get<EmailService>(EmailService);
    sendGridService = module.get<SendGridService>(SendGridService);
  });

  describe('EmailService', () => {
    it('should work', () => {
      // todo: test
    });
  });
});
