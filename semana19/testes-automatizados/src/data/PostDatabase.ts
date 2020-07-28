import { Database } from "./BaseDatabase";
import dotenv from "dotenv";

dotenv.config();

export class PostDatabase extends Database {

    private static TABLE_NAME: string = 'Labook_Post';

    public static getTableName = (): string => PostDatabase.TABLE_NAME;

    public create = async (
        id: string,
        photo: string,
        description: string,
        type: string,
        user_id: string
    ): Promise<void> => {

        await this.getConnection()
            .insert({ id, photo, description, type, user_id })
            .into(PostDatabase.TABLE_NAME);
    }

    public checkById = async (id: string): Promise<boolean> => {

        const result = await this.getConnection()
            .select('*')
            .from(PostDatabase.TABLE_NAME)
            .where({ id });
        if (result.length) {
            return true;
        }
        return false;
    }

    public async deletePost(id: string): Promise<any> {
        await this.getConnection()
          .delete()
          .from(PostDatabase.TABLE_NAME)
          .where({ id });
      }
}

export enum POST_TYPE {
    ANY = "Normal",
    NORMAL = "Normal",
    EVENT = "Event"
}