import { Injectable, OnModuleInit } from '@nestjs/common';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async OnModuleInit() {
        await this.$connect();
    }

}
