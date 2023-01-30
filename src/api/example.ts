import z from 'zod';

const mock = [
    {
        name: {
            first: 'John',
            last: 'Doe',
        },
        age: 30,
        gender: 'male',
        occupation: 'Tester',
    },
    {
        name: {
            first: 'Jane',
            last: 'Doe',
        },
        age: 28,
        gender: 'female',
        occupation: 'Programmer',
    },
    {
        name: {
            first: 'Hans',
            last: 'Schmidt',
        },
        age: 69,
        gender: 'male',
        occupation: 'Nein, just visiting',
    },
];

const genders = ['male', 'female'] as const;

const mockDataValidator = z.array(
    z.object({
        name: z.object({
            first: z.string().min(1).max(50),
            last: z.string().min(1).max(50),
        }),
        age: z.number().min(1).max(150),
        gender: z.enum(genders),
        occupation: z.string().max(100),
    }),
);

const mockValidator = z.array(
    z.object({
        firstName: z.string().min(1).max(50),
        lastName: z.string().min(1).max(50),
        age: z.number().min(1).max(150),
        gender: z.enum(['m', 'f']),
        occupation: z.string().max(100),
    }),
);

export type MockValidatorType = z.infer<typeof mockValidator>;

const parseResponse = (
    response: z.infer<typeof mockDataValidator>,
): MockValidatorType =>
    response.map((elem) => ({
        firstName: elem.name.first,
        lastName: elem.name.last,
        age: elem.age,
        gender: elem.gender === 'female' ? 'f' : 'm',
        occupation: elem.occupation,
    }));

export const example = async () => {
    return new Promise<MockValidatorType>((resolve, reject) => {
        try {
            const response = mockDataValidator.parse(mock);
            const parsedResponse = parseResponse(response);
            // setTimeout(() => resolve(parsedResponse), 3000);
            resolve(parsedResponse);
        } catch (err) {
            reject(err);
        }
    });
};
