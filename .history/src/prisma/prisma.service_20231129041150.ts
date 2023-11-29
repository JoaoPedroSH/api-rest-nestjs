import { Injectable, OnModuleInit } from '@nestjs/common';
import 

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async OnModuleInit() {
        await this.$connect();
    }

}
