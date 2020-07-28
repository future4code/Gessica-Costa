import { PostDatabase } from "../../src/data/PostDatabase"
import { Database } from "../../src/data/BaseDatabase"

const post: PostDatabase = new PostDatabase()

describe("Testins PostDatabase", () => {
    afterAll(async () => {
        await post.deletePost("1")
        await Database.destroyConnection()
    })

    test("Create Post", async () => {
        await post.create("1", "PhotoLink", "Descrição", "Normal", "709b79ad-4117-43e8-ab6f-9645c17bb3fd")

        const result = await post.checkById("1")
        expect(result).toEqual(true)
    })

    test("Create Post with error", async () => {
        try {
            await post.create("1", "PhotoLink", "Descrição", "Normal", "709b79ad-4117-43e8-ab6f-9645c17bb3fd")
            await post.create("1", "PhotoLink", "Descrição", "Normal", "709b79ad-4117-43e8-ab6f-9645c17bb3fd")

        } catch (err) {
            expect(err).not.toBeUndefined()
            expect(err).not.toBe(undefined)
            expect(err.code).toEqual("ER_DUP_ENTRY")
        }
    })
})