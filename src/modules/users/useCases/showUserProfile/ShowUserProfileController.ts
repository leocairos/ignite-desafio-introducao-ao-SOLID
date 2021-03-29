import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;
      const profile = this.showUserProfileUseCase.execute({ user_id });
      return response.json(profile);
    } catch (err) {
      return response.status(404).send({ error: err });
    }
  }
}

export { ShowUserProfileController };
